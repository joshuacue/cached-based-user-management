import React, { PropsWithChildren } from "react";

export const FormContainer: React.FC<
  PropsWithChildren & {
    onSubmit: () => void;
  }
> = ({ children, onSubmit }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex my-auto py-2 justify-center px-2 overflow-y-auto`}
    >
      <div className={`bg-white`}>
        <form
          data-testid={`user-form`}
          onSubmit={onSubmit}
          className={`w-full flex flex-wrap bg-white max-w-[144em] mx-auto space-y-2 py-2 min-h-full`}
        >
          <h2 className={`w-full px-2`}>
            <span className={`flex -tracking-[1px] text-3`}>
              Edit User Details
            </span>
          </h2>
          {children}
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
