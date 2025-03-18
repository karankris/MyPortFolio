import { ChangeEvent } from "react";
import { X } from "lucide-react";
interface FloatingLabelInputProps {
    label?: string;
    type?: "text" | "email" | "password" | "tel" | "number" | "textarea";
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    error?: boolean;
    placeholder?: string;
    rows?: number
    className?: string
    startIcon?: React.ReactNode;
}

export default function InputField({
    type = "text",
    value,
    onChange,
    required = false,
    error = false,
    placeholder = "",
    rows,
    className,
    startIcon
}: FloatingLabelInputProps) {
    return (
        <div className="relative w-full">
            {/* Left Icon */}
            {startIcon && (
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300">
                    {startIcon}
                </div>
            )}
            {type === "textarea" ? (
                // Render Textarea
                <textarea
                    id="floating-textarea"
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    rows={rows}
                    className={`peer w-full resize-none rounded-lg border bg-transparent px-3 py-2 pr-10 text-base outline-none transition-all      ${className} 
       ${error ? "border-red-500 text-red-500" : "border-gray-300 dark:text-white text-black"}
            focus:border-black dark:focus:border-white focus:ring-1 focus:ring-white hover:border-black dark:hover:border-white`}
                ></textarea>
            ) : (
                // Render Input
                <input
                    id="floating-input"
                    type={type}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className={`peer w-full rounded-lg border bg-transparent px-3 py-2 pr-10 text-base outline-none transition-all
            ${className} 
            ${error ? "border-red-500 text-red-500" : "border-gray-300 dark:text-white text-black"}
            focus:border-black dark:focus:border-white focus:ring-1 focus:ring-white`}
                />
            )}
        </div>
    );
}

