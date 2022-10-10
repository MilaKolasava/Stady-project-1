import React, { useEffect, useState } from "react";
import { Repository } from "../../store/repositories/types";

interface RepositoriesListsProps {
  isLoading: boolean;
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
          <a href={repository.html_url} target="_blank" rel="noreferrer">
            {repository.html_url}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default RepositoriesList;
