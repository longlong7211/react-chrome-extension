export function htmlToString(html: string): string {
    const r1 = html?.replace(/</g, '&lt;');
    return r1?.replace(/>/g, '&gt;');
}

export function breakLineConvert(str: string) {
    return str.replace(/\n/g, '<br>');
}