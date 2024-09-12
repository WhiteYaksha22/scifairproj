// place files you want to import through the `$lib` alias in this folder.
export function kebab_case(text: any) {
    return text.toLowerCase().replace(" ", "-")
}