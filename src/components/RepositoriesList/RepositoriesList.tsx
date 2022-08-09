import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

type SearchResult = Array<Repository>;

type Repository = {
  name: string;
  id: number;
  html_url: string;
};

function RepositoriesList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepositiry, setSelectedRepository] =
    useState<Repository | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (selectedRepositiry) {
      document.title = selectedRepositiry.name;
    }
  }, [selectedRepositiry]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<SearchResult>("https://api.github.com/users/MilaKolasava/repos")
      .then((response) => {
        setRepositories(response.data);
        setIsLoading(false);
      });
  }, []);

  return { isLoading } ? (
    <LoadingSpinner />
  ) : (
    <ol data-testid="repositories-list-items">
      {repositories.map((repository) => (
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
