import axios from "axios";
import React, { useEffect, useState } from "react";

type SearchResult = Array<Repository>;

type Repository = {
  name: string;
  id: number;
  html_url: string;
};

function ModalList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null);

  useEffect(() => {
    if (selectedRepo) {
      document.title = selectedRepo.name;
    }
  }, [selectedRepo]);

  useEffect(() => {
    axios
      .get<SearchResult>("https://api.github.com/users/MilaKolasava/repos")
      .then((response) => {
        setRepositories(response.data);
      });
  }, []);

  return (
    <ol>
      {repositories.map((repo) => (
        <li
          key={repo.id}
          className={selectedRepo === repo ? "selected" : ""}
          onClick={() => {
            setSelectedRepo(repo);
          }}
        >
          <b>{repo.name}</b> <br />
          <a href={repo.html_url} target="_blank">
            {repo.html_url}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default ModalList;
