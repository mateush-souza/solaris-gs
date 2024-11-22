"use client"

import React from 'react'
import FormBase from '@/app/components/Helper/FormBase'

const page = () => {
    const handleRegister = (formData: Record<string, string>) => {
        console.log("Register data:", formData);
      };
  return (
    <FormBase
    title="Seja bem vindo ao Solaris!"
    description="Aqui sua iniciativa mostra na prática seus ganhos."
    fields={[
      { name: "name", label: "Nome:", type: "text" },
      { name: "cpf", label: "CPF:", type: "text" },
      { name: "email", label: "Email:", type: "email" },
      { name: "password", label: "Senha:", type: "password" },
    ]}
    buttonText="Cadastrar"
    onSubmit={handleRegister}
    footerLink={{ text: "Já tenho conta", href: "/login" }}
  />
  )
}

export default page
