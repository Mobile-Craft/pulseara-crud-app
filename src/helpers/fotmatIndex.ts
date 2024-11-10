export const formatIndex = (index: number): string => {
    return `${index <= 8 ? '0' : ''}${index + 1}`;
};
