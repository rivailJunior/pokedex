import { FormPage } from '@/components/PagesContainers/FormPage';

export default async function Home() {
  return (
    <div className='container mt-16 bg-gray-100 dark:bg-gray-800 p-3'>
      <div className='flex flex-col gap-4 items-center'>
        <FormPage />
      </div>
    </div>
  );
}
