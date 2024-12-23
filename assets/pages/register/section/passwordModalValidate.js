import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

function PasswordModalValidate({ errors }) {
  return errors.password ? (
    <div
      className="bg-white shadow-md rounded-sm absolute p-10"
      style={{
        width: "92%",
        padding: "20px",
        display: "block",
        zIndex: 1,
        marginTop: "-45%",
      }}
    >
      <div>
        <div className="flex items-center mb-2">
          <CheckCircleIcon
            className={`w-5 ${
              errors.password && errors.password?.minLength
                ? "text-black"
                : "text-green-500"
            }`}
          />
          <p
            className={`ml-2 text-xs font-medium ${
              errors.password && errors.password?.minLength
                ? "text-black"
                : "text-green-500"
            }`}
          >
            Minimum 8 characters
          </p>
        </div>
        <div className="flex items-center mb-2">
          <CheckCircleIcon
            className={`w-5 ${
              errors.password && errors.password?.hasUppercase
                ? "text-black"
                : "text-green-500"
            }`}
          />
          <p
            className={`ml-2 text-xs font-medium ${
              errors.password && errors.password?.hasUppercase
                ? "text-black"
                : "text-green-500"
            }`}
          >
            At least 1 uppercase letter (A-Z)
          </p>
        </div>
        <div className="flex items-center mb-2">
          <CheckCircleIcon
            className={`w-5 ${
              errors.password && errors.password?.hasLowercase
                ? "text-black"
                : "text-green-500"
            }`}
          />
          <p
            className={`ml-2 text-xs font-medium ${
              errors.password && errors.password?.hasLowercase
                ? "text-black"
                : "text-green-500"
            }`}
          >
            At least 1 lowercase letter (a-z)
          </p>
        </div>
        <div className="flex items-center mb-2">
          <CheckCircleIcon
            className={`w-5 ${
              errors.password && errors.password?.hasDigit
                ? "text-black"
                : "text-green-500"
            }`}
          />
          <p
            className={`ml-2 text-xs font-medium ${
              errors.password && errors.password?.hasDigit
                ? "text-black"
                : "text-green-500"
            }`}
          >
            At least 1 digit (0-9)
          </p>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon
            className={`w-5 ${
              errors.password && errors.password?.hasSpecialChar
                ? "text-black"
                : "text-green-500"
            }`}
          />
          <p
            className={`ml-2 text-xs font-medium ${
              errors.password && errors.password?.hasSpecialChar
                ? "text-black"
                : "text-green-500"
            }`}
          >
            At least 1 special characters
          </p>
        </div>
      </div>
    </div>
  ) : null;
}

export default PasswordModalValidate;
