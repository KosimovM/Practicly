'use client'

import { postCard } from '@/app/lib/Api/api'
import { AppDispatch } from '@/app/lib/Store/store'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

interface AddProps {
  AddOpen: boolean
  setAddOpen: (open: boolean) => void
}

const Add = ({ AddOpen, setAddOpen }: AddProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !description) return
    await dispatch(postCard({ name, description }))
    setName('')
    setDescription('')
    setAddOpen(false)
  }

  if (!AddOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setAddOpen(false)}
      />
      
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-primary p-6 text-white">
          <h2 className="text-2xl font-bold">Create New Post</h2>
          <p className="text-white/70 text-sm">Share your story with our community.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground/60 ml-1">Title</label>
            <input
              type="text"
              placeholder="Give your post a title"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl transition-all outline-none"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground/60 ml-1">Content</label>
            <textarea
              placeholder="What's on your mind?"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent focus:border-primary/50 rounded-xl transition-all outline-none min-h-[150px] resize-none"
              required
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setAddOpen(false)}
              className="flex-1 px-4 py-3 text-sm font-bold text-foreground/60 hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 px-4 py-3 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Add
