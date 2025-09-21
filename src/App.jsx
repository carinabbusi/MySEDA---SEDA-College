import React from "react";
import logo from "./assets/seda-logo.png";

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="border-b bg-white/90 py-4">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="SEDA College" className="h-10 w-auto bg-gray-200" />
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">SEDA College</p>
            <h1 className="text-lg font-semibold tracking-tight">MySEDA — Verificação de Carta</h1>
          </div>
        </div>
        <span className="text-xs text-gray-500">Ref: 2401269</span>
      </Container>
    </header>
  );
}

function StatusBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
      <span className="h-2 w-2 rounded-full bg-emerald-500" />
      {label}
    </span>
  );
}

function KeyValue({ k, v }) {
  return (
    <div className="grid grid-cols-12 gap-3 py-2">
      <dt className="col-span-5 text-sm font-medium text-gray-600">{k}</dt>
      <dd className="col-span-7 text-sm text-gray-900">{v}</dd>
    </div>
  );
}

function LetterCard() {
  return (
    <Container>
      <div className="-mt-10" />
      <div className="mx-auto mt-10 rounded-3xl border bg-white p-6 shadow-xl sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">VISA EXTENSION LETTER</h2>
            <p className="mt-1 text-sm text-gray-500">Emitida em 10/09/2025</p>
          </div>
          <StatusBadge label="MATRICULADA" />
        </div>

        <div className="mt-6 rounded-2xl border bg-gray-50 p-4 text-sm text-gray-600">
          <p>
            Garda National Immigration Bureau — 13-14, Burgh Quay, Dublin 2<br />
            Este documento confirma que a estudante abaixo encontra-se <strong>matriculada</strong> na
            Skills & Enterprise Development Academy (SEDA).
          </p>
        </div>

        <section className="mt-8">
          <h3 className="text-lg font-semibold">Dados da Estudante</h3>
          <dl className="mt-2 divide-y">
            <KeyValue k="ILEP Reg No" v="0199/0013" />
            <KeyValue k="Student No" v="2401269" />
            <KeyValue k="Nome" v="Carina Freitas Busi" />
            <KeyValue k="Endereço" v="75 Annaly Road, Cabra, Dublin, Republic of Ireland" />
            <KeyValue k="Data de Nascimento" v="28/03/2002" />
            <KeyValue k="Passaporte" v="GG825080" />
            <KeyValue k="Nacionalidade" v="Brazilian" />
          </dl>
        </section>

        <section className="mt-8">
          <h3 className="text-lg font-semibold">Detalhes do Curso</h3>
          <dl className="mt-2 divide-y">
            <KeyValue k="Curso" v="General English with Trinity ISE I" />
            <KeyValue k="Duração" v="33 semanas" />
            <KeyValue k="Início" v="15/09/2025" />
            <KeyValue k="Término" v="14/05/2026" />
            <KeyValue k="Certificadora" v="Trinity College London" />
            <KeyValue k="Modo de Estudo" v="Full-Time" />
          </dl>
          <p className="mt-4 text-sm text-gray-600">As propinas do curso foram totalmente pagas à SEDA.</p>
        </section>

        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border p-4">
            <p className="text-sm text-gray-500">Assinado por</p>
            <p className="mt-1 font-medium">Tiago Mascarenhas</p>
            <p className="text-sm text-gray-600">Administrator</p>
          </div>
          <div className="flex items-center justify-center rounded-2xl border p-4">
            <div className="text-center">
              <div className="mx-auto h-24 w-24 rounded bg-gray-200" />
              <p className="mt-2 text-xs text-gray-500">QR / Selo de verificação</p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
          <a href="#" className="text-sm font-medium text-sky-700 hover:underline">Verificar outro documento</a>
          <button
            className="rounded-2xl border px-4 py-2 text-sm hover:bg-gray-50"
            onClick={() => window.print()}
          >
            Imprimir / Salvar PDF
          </button>
        </div>
      </div>

      <p className="mx-auto mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SEDA College — Este é um documento de verificação online.
      </p>
    </Container>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      <Header />
      <LetterCard />
    </div>
  );
}
