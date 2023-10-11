import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Technologies } from "./components/Technologies";
import { FormAddNewTechnology } from "./components/FormAddNewTechnology";

const LOCAL_STORAGE_KEY = "todo:technology";

export interface ITechnology {
  id: string;
  title: string;
  isChecked: boolean;
}

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);

  function loadSavedTechnologies(): void {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTechnologies(JSON.parse(saved));
    }
  }

  function setTechnologiesAndSave(newTechnologies: ITechnology[]): void {
    setTechnologies(newTechnologies);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTechnologies));
  }

  useEffect(() => {
    loadSavedTechnologies();
  }, []);

  function addTechnology(technologyTitle: string): void {
    setTechnologiesAndSave([
      ...technologies,
      {
        id: crypto.randomUUID(),
        title: technologyTitle,
        isChecked: false,
      },
    ]);
  }

  function deleteTechnologyById(technologyId: string): void {
    const newTechnologies = technologies.filter(
      (technology) => technology.id !== technologyId
    );
    setTechnologiesAndSave(newTechnologies);
  }

  function toggleTechnologyCheckedById(technologyId: string) {
    const newTechnologies = technologies.map((technology) => {
      if (technology.id === technologyId) {
        return {
          ...technology,
          isChecked: !technology.isChecked,
        };
      }
      return technology;
    });
    setTechnologiesAndSave(newTechnologies);
  }
  return (
    <>
      <Header />
      <FormAddNewTechnology addTechnology={addTechnology} />
      <Technologies
        onChecked={toggleTechnologyCheckedById}
        onDelete={deleteTechnologyById}
        technologies={technologies}
      />
    </>
  );
}

export default App;
