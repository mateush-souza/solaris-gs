"use client";
import { useState } from "react";
import Image from "next/image";

interface FormField {
  name: string;
  label: string;
  type: string;
}

interface FormBaseProps {
  title: string;
  description: string;
  fields: FormField[];
  buttonText: string;
  onSubmit: (formData: Record<string, string>) => void; // Alterado para lidar com resposta async
  footerLink?: { text: string; href: string };
}

const FormBase: React.FC<FormBaseProps> = ({
  title,
  description,
  fields,
  buttonText,
  footerLink,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const validationErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (!formData[field.name]) {
        validationErrors[field.name] = `${field.label} é obrigatório.`;
      }
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const isSuccess: boolean = true;

    if (isSuccess) {
      setModalMessage("Cadastro realizado com sucesso!");
      setModalType("success");
    } else {
      setModalMessage("Erro ao realizar o cadastro. Tente novamente.");
      setModalType("error");
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-black">
      <div className="hidden w-1/2 lg:block">
        <Image
          src="/images/login.jpg"
          width={1000}
          height={800}
          alt="Imagem ilustrativa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-black text-white">
        <div className="max-w-md p-10 pt-[150px] lg:pt-[-10px]">
          <h1 className="mb-2 text-2xl font-bold text-white">{title}</h1>
          <p className="mb-6 text-sm text-gray-400">{description}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col space-y-2">
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-gray-300"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-sm text-gray-900 border border-gray-600 rounded-lg bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-gradientStart"
                />
                {errors[field.name] && (
                  <p className="text-sm text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-gradient-to-r from-gradientStart to-gradientEnd hover:from-gradientEnd hover:to-gradientStart rounded-full shadow-lg"
            >
              {buttonText}
            </button>
          </form>
          {footerLink && (
            <p className="mt-4 text-center text-sm text-gray-400">
              <a href={footerLink.href} className="text-gray-300 hover:underline">
                {footerLink.text}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Modal de Sucesso/Erro */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            className={`w-96 p-6 rounded-lg ${
              modalType === "success"
                ? "bg-green-600"
                : "bg-red-600"
            } text-white`}
          >
            <h2 className="text-xl font-bold">{modalType === "success" ? "Sucesso!" : "Erro!"}</h2>
            <p className="mt-4">{modalMessage}</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-white bg-gray-800 rounded-full"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormBase;
