'use client'

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCard } from '@/app/lib/Api/api'
import Edit from '@/app/ui/Modal/pag'
import { AppDispatch } from '@/app/lib/Store/store'
import Link from 'next/link'

interface CardProps {
  name: string
  description: string
  id: number
}

const Card = ({ name, description, id }: CardProps) => {
  const dispatch: AppDispatch = useDispatch()
  const [editOpen, setEditOpen] = useState(false)

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault()
    setEditOpen(true)
  }

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault()
    if (confirm('Are you sure you want to delete this post?')) {
      dispatch(deleteCard(id))
    }
  }

  return (
    <>
      <div className="group relative bg-white dark:bg-slate-800/40 rounded-[2rem] border border-border p-8 transition-all duration-500 card-hover flex flex-col h-full overflow-hidden">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
        
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest">
            Article
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleEdit}
              className="p-2 text-foreground/20 hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
              title="Edit Post"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </button>
            <button 
              onClick={handleDelete}
              className="p-2 text-foreground/20 hover:text-secondary hover:bg-secondary/10 rounded-xl transition-all"
              title="Delete Post"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </button>
          </div>
        </div>

        <Link href={`/${id}`} className="flex-grow relative z-10">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">
            {name}
          </h3>
          <p className="text-foreground/60 dark:text-foreground/50 line-clamp-3 text-base leading-relaxed mb-8">
            {description}
          </p>
        </Link>

        <div className="pt-8 border-t border-border flex items-center justify-between mt-auto relative z-10">
          <Link 
            href={`/${id}`} 
            className="text-sm font-black text-primary flex items-center gap-2 group/link uppercase tracking-wider"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
          <div className="flex -space-x-2">
             <div className="w-9 h-9 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-vibrant opacity-20" />
          </div>
        </div>
      </div>

      <Edit
        EditOpen={editOpen}
        setEditOpen={setEditOpen}
        id={id}
        Name={name}
        Description={description}
      />
    </>
  )
}

export default Card
