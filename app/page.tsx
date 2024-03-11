"use client";
import { useState } from "react";
import Welcome from "./components/Welcome";
import HomePage from "./(Home)/page";

const MainPage = () => {
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  return (
    <div className="h-screen flex justify-center items-center relative overflow-hidden">
      <Welcome
        animationCompleted={animationCompleted}
        setAnimationCompleted={setAnimationCompleted}
      />
      {animationCompleted && (
        <div className="absolute top-0 left-0 w-full h-full opacity-1">
          <HomePage />
        </div>
      )}
    </div>
  );
};

export default MainPage;
