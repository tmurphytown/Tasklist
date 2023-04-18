import { Dialog } from '@capacitor/dialog';

export const showPrompt = async (title: string, message: string): Promise<string> => {
  const { value } = await Dialog.prompt({
    title,
    message,
  });

  return value;
};