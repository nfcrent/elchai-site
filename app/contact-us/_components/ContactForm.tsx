import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";

import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { sendContact } from "@/lib/actions/contact";

const ContactForm = () => {
    return (
        <>
            <form action={sendContact} className="space-y-5">
                <div className="relative">
                    <div className="input-parent">
                        <Input placeholder="Name" name="name" required type="text" className="bg-white rounded-full px-6 py-4 pr-12 !text-base h-auto text-[#666666] focus-visible:ring-0" /> 
                    </div>
                    <FaUserAlt className="text-[#666666] absolute top-1/2 -translate-y-1/2 right-6" />
                </div>
                <div className="relative">
                    
                    <div className="input-parent">
                        <Input type="email" name="email" required placeholder="Email Address" className="bg-white rounded-full px-6 py-4 pr-12 !text-base h-auto text-[#666666] focus-visible:ring-0" />
                    </div>
                    <FaEnvelope className="text-[#666666] absolute top-1/2 -translate-y-1/2 right-6" />
                </div>
                <div className="relative">
                    <div className="input-parent">
                        <Input type="tel" name="phone" placeholder="Phone Number" className="bg-white rounded-full px-6 py-4 pr-12 !text-base h-auto text-[#666666] focus-visible:ring-0" />
                    </div>
                    <FaPhone className="text-[#666666] absolute top-1/2 -translate-y-1/2 right-6" />
                </div>
                <div className="relative">
                    <div className="input-parent">
                        <Input placeholder="Company" name="company" required className="bg-white rounded-full px-6 py-4 pr-12 !text-base h-auto text-[#666666] focus-visible:ring-0" />
                    </div>
                    <FaRegBuilding className="text-[#666666] absolute top-1/2 -translate-y-1/2 right-6" />
                </div>
                <div className="relative">
                    <div className="input-parent !rounded-3xl">
                        <Textarea name="message" placeholder="Project Description / Message" className="bg-white rounded-3xl px-6 py-4 pr-12 !text-base block resize-none h-50 text-[#666666] focus-visible:ring-0" />
                    </div>
                    <AiOutlineMessage className="text-[#666666] absolute top-6 right-6" />
                </div>
                <Button type="submit" variant={'link'} className="text-white underline font-bold text-lg table mx-auto cursor-pointer">Submit Here</Button>
            </form>
        </>
    )
}

export default ContactForm