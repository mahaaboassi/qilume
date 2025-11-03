"use client"

import type React from "react"
import { useState } from "react"
import contactImage from "@/assets/contact/contact.png"
import Image from "next/image"
import { ArrowUpRightFromSquare } from "lucide-react"
import commas from "@/assets/contact/commas.svg"
import pankaj from "@/assets/contact/pankaj.jpeg"
import tanya from "@/assets/contact/tanya.jpeg"
import yoshika from "@/assets/contact/yoshika.jpeg"

const testimonials = [
  {
    text: "I was nervous about laser hair removal, but my experience at QiLumé completely changed that. The doctors were incredibly professional and took the time to explain every detail. The treatment itself was fast, comfortable, and seamless from start to finish. I truly appreciated the honest consultation no overselling, just what my skin actually needed.",
    avatar: pankaj,
    name: "Pankaj R., 35",
  },
  {
    text: "I’ve tried a lot of facials and treatments over the years, but nothing has made my skin feel as firm and lifted as Ultracel Q+ at QiLumé. The results were subtle yet powerful; no dramatic change, just a fresher, younger version of me. The team was knowledgeable, gentle, and so respectful of my comfort throughout.",
    avatar: tanya,
    name: "Tanya S. , 28",
  },
  {
    text: "My skin had uneven tone and post-acne marks that just wouldn’t fade. After a few TRI-Beam sessions at QiLumé, I can see a huge difference. My complexion is brighter, smoother, and more even. People have actually started asking me what I’ve been doing differently! The treatment was quick and there was zero downtime.",
    avatar: yoshika,
    name: "Yoshika B., 38",
  },
]

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" }) // clear error when editing
  }

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = "Name is required."
    if (!formData.email.trim()) newErrors.email = "Email is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address."
    if (!formData.message.trim()) newErrors.message = "Message is required."
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    setSuccess(false)

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" })
        setSuccess(true)
        // Clear success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setErrors({ submit: data.message || "Failed to send message" })
      }
    } catch (error) {
      console.error(error)
      setErrors({ submit: "Network error. Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#EFEAE6] p-6">
      <div className="flex flex-col md:flex-row gap-8 lg:px-20 mx-auto mt-6">
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden">
          <Image src={contactImage || "/placeholder.svg"} alt="Facial treatment" className="w-full object-cover" />
          <div className="absolute flex items-end justify-center font-darker bottom-4 right-4 bg-[rgba(202,198,198,0.41)] px-4 py-2 rounded-lg text-2xl">
          Subscribe to our <br/> social networks to <br/> learn more
            <ArrowUpRightFromSquare size={20} />
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-xl p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-darker font-bold mb-6">How can we help you?</h2>
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className={`flex-1 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-full px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-500" : "focus:ring-green-700"
              }`}
            />
            {errors.name && <span className="text-red-500 text-sm w-full">{errors.name}</span>}

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className={`flex-1 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-full px-4 py-2 focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-green-700"
              }`}
            />
            {errors.email && <span className="text-red-500 text-sm w-full">{errors.email}</span>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={14}
              className={`w-full border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-green-700"
              }`}
            />
            {errors.message && <span className="text-red-500 text-sm w-full">{errors.message}</span>}

            <button
              type="submit"
              disabled={submitting}
              className={`w-full cursor-pointer bg-green-800 text-white rounded-full py-3 text-lg font-medium hover:bg-green-900 transition ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Sending..." : "Send your message"}
            </button>
          </form>
          {success && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Message sent successfully! We will get back to you soon.</span>
            </div>
          )}

          {errors.submit && (
            <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <span className="font-medium">{errors.submit}</span>
            </div>
          )}
        </div>
      </div>

      <div className="lg:px-20 mx-auto mt-8 lg:mt-16">
        <h3 className="text-4xl font-darker font-bold mb-8 text-gray-800">Let{"'"}s see what our customers think</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-t-xl rounded-l-xl pl-6 flex flex-col justify-between min-h-[180px]"
            >
              <div className="mt-4">
                <Image src={commas || "/placeholder.svg"} alt="Commas" />
                <p className="text-gray-700 font-darker text-md lg:text-xl mt-2 pr-6">{t.text}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg lg:text-2xl font-darker">{t.name}</p>
                </div>
                <div className="flex items-center mt-4 ml-auto bg-[#EFEAE6] p-1 rounded-xl -mr-2">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt="Customer avatar"
                    className="w-14 h-14 rounded-full border-2 border-white shadow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactSection