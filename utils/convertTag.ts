export function convertTag(rawTag: string, separate: string, minimumLengthOfTag: number): any {
    const listTagRaw = rawTag.split(separate);
    const trimTag = listTagRaw.map((tag) => {
        return { name: tag.trim().replace(/ /g, '_') };
    });
    const removeTagNull = trimTag.filter((tag, index) => {
        if (tag.name.length >= minimumLengthOfTag) {
            return tag;
        }
    });
    return removeTagNull;
}