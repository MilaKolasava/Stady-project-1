import { ACTION_STATUSES } from "../../components/shared/types"

export interface RepositoriesState {
    repositories: Array<Repository> | null,
    status: ACTION_STATUSES | null,
    error: Error | null,
}

export type Repository = {
    name: string;
    id: number;
    html_url: string;
  };
  
export type Response = {
    response: Array<Repository>
  };
  
  export interface ModalWindowProps {
    setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  }