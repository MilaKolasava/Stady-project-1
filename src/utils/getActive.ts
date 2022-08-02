export default function getActive(locale: string, LOCALES:string):string {
    return (
        locale === LOCALES ? "active" : ""
    )
  }