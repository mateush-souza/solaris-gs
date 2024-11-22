// components/Modal.tsx
import React from "react";

type ModalProps = {
  title: string;
  content?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText: string;
  cancelText?: string;
};

export const Modal = ({
  title,
  content,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4 text-black">{title}</h2>
        {content && <p className="text-gray-700 mb-4">{content}</p>}
        <div className="flex justify-end gap-2">
          {cancelText && (
            <button
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onCancel}
            >
              {cancelText}
            </button>
          )}
          <button
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};
