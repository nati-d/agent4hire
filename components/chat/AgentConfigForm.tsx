import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from '../ui/input'
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { FormData, formSchema } from '@/utils/schema/createAgentSchema'

interface AgentConfigFormProps {
  onSubmit: (data: FormData) => void
  isSubmitting: boolean
}

const AgentConfigForm: React.FC<AgentConfigFormProps> = ({ onSubmit, isSubmitting }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  return (
    <div className="max-w-3xl mx-auto mt-8 p-8">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Agent Configuration</h2>
      <p className="text-center text-[14px] text-gray-600 mb-8">
        Configure your AI agent by specifying its role and description.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="role" className="block text-[12px] font-medium text-gray-700 mb-1">Role</label>
          <Input 
            id="role" 
            {...register("role")} 
            className="mt-1 block w-full placeholder:text-[12px] text-[12px]"
            placeholder="e.g., Customer Support Agent, Data Analyst, Creative Writer"
          />
          {errors.role && <p className="text-red-500 text-[10px] mt-1">{errors.role.message}</p>}
          <p className="text-gray-500 text-xs mt-1">Define the primary function or job title of your AI agent.</p>
        </div>
        <div>
          <label htmlFor="description" className="block text-[12px] font-medium text-gray-700 mb-1">Description</label>
          <Textarea 
            id="description" 
            {...register("description")} 
            className="mt-1 block w-full placeholder:text-[12px] text-[12px]" 
            rows={4}
            placeholder="Describe the agent's responsibilities, expertise, and any specific instructions..."
          />
          {errors.description && <p className="text-red-500 text-[10px] mt-1">{errors.description.message}</p>}
          <p className="text-gray-500 text-xs mt-1">Provide a detailed description of the agent&apos;s capabilities, knowledge areas, and how it should interact.</p>
        </div>
        <div className="flex justify-center mt-8">
          {
            isSubmitting ? (
              <Button 
              disabled
              type="submit"
              className="w-full px-6 py-3 gradient text-white-a0 font-semibold rounded-lg shadow-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
            >
              Creating Agent...
            </Button>
            ):(
<Button 
            type="submit"
            className="w-full px-6 py-3 gradient text-white-a0 font-semibold rounded-lg shadow-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
          >
            Create Agent
          </Button>
            )
          }
          
        </div>
      </form>
    </div>
  )
}

export default AgentConfigForm
