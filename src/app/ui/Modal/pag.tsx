'use client'

import { updateCard } from '@/app/lib/Api/api'
import { AppDispatch } from '@/app/lib/Store/store'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

interface EditProps {
  EditOpen: boolean
  setEditOpen: (open: boolean) => void
  id: number
  Name: string
  Description: string
}

const Edit = ({ EditOpen, setEditOpen, id, Name, Description }: EditProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState(Name)
  const [description, setDescription] = useState(Description)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !description) return
    await dispatch(updateCard({ id, name, description }))
    setEditOpen(false)
  }

  if (!EditOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setEditOpen(false)}
      />
      
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary/10 p-6 border-b border-foreground/5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-primary">Edit Post</h2>
            <p className="text-foreground/40 text-xs font-medium uppercase tracking-wider mt-1">Refine your content</p>
          </div>
          <button 
            onClick={() => setEditOpen(false)}
            className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/40"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground/60 ml-1">Title</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl transition-all outline-none"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground/60 ml-1">Content</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl transition-all outline-none min-h-[150px] resize-none"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setEditOpen(false)}
              className="flex-1 px-4 py-3 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 px-4 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit
