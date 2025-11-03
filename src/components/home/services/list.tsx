"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

interface Service {
  ServiceName: string
  Description: string
}

export default function ServiceList({ service }: { service: string | string[] | undefined }) {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (service) {
      setLoading(true)
      setError(null)

      fetch(`/api/services/${service}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to fetch services: ${res.status}`)
          }
          return res.json()
        })
        .then((data) => {
          setServices(data)
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error fetching services:", err)
          setError(err.message || "Failed to load services")
          setLoading(false)
        })
    }
  }, [service])

  if (!service) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Please select a service category</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md my-4 flex items-center">
        <AlertCircle className="h-5 w-5 mr-2" />
        <p>{error}. Please try again later.</p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading services...</p>
      </div>
    )
  }

  if (!services.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No services found for this category</p>
      </div>
    )
  }

  const serviceTitle = Array.isArray(service) ? service[0] : service

  return (
    <div className="w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-4xl font-bold uppercase bg-[#31533E] text-white py-2 font-darker w-full my-5 inline-block mb-2">
          {
            serviceTitle === "anti-aging" ? "Anti Aging and Beauty" : serviceTitle
          } Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-5 py-10">
        {services.map((item, index) => (
          <Link
          href="/contact"
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg text-gray-800">{item.ServiceName}</h3>
            </div>
            <p className="text-gray-600">{item.Description}</p>
          </Link>
        ))}
      </div>
      <div className="w-full mx-auto py-5 lg:py-10 flex items-center justify-center">
        <Link href="/contact" className='text-lg text-white bg-[#31533E] px-6 py-3 rounded-2xl'>Book Consultation</Link>
      </div>
    </div>
  )
}
