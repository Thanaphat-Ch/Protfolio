"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">

        {/* 404 */}
        <h1 className="text-6xl font-light tracking-widest text-gray-900">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-xl font-medium text-gray-800">
          ไม่พบหน้าที่คุณกำลังค้นหา
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
          หน้าอาจถูกย้าย ลบ หรือ URL ไม่ถูกต้อง
        </p>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gray-100" />

        {/* Actions */}
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="text-sm px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
          >
            กลับหน้าหลัก
          </Link>

          <button
            onClick={() => window.history.back()}
            className="text-sm px-5 py-2 text-gray-500 hover:text-gray-800 transition"
          >
            ย้อนกลับ
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} Your Website
        </p>

      </div>
    </div>
  );
}