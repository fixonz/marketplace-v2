import { useRouter } from 'next/router';

const PreviewButton = () => {
  const router = useRouter();

  const enterPreviewMode = async () => {
    const res = await fetch('/api/preview');
    if (res.ok) {
      router.reload();
    } else {
      console.error('Failed to enter preview mode');
    }
  };

  return <button onClick={enterPreviewMode}>Enter Preview Mode</button>;
};

export default PreviewButton;
