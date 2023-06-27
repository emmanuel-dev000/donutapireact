export const MAX_CHARS_SHOWN = 30;
export default function SubstringText(text: string) : string {
    return (text.length <= MAX_CHARS_SHOWN) ? text : text.substring(0, MAX_CHARS_SHOWN) + "...";
}