import React, { useEffect, useState } from "react";

type Repository = {
  name: string;
  id: number;
  html_url: string;
};

interface RepositoriesListsProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  repositories: Repository[];
}

function RepositoriesList(props: RepositoriesListsProps) {
  const [selectedRepositiry, setSelectedRepository] =
    useState<Repository | null>(null);

  useEffect(() => {
    if (selectedRepositiry) {
      document.title = selectedRepositiry.name;
    }
  }, [selectedRepositiry]);

  return (
    <ol data-testid="repositories-list-items">
      {props.repositories.map((repository) => (
        <li
          key={repository.id}
          className={selectedRepositiry === repository ? "selected" : ""}
          onClick={() => {
            setSelectedRepository(repository);
          }}
        >
          <b>{repository.name}</b> <br />
          <a href={repository.html_url} target="_blank">
            {repository.html_url}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default RepositoriesList;
