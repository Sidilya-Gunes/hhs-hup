
import MainLayout from '@/components/layout/MainLayout';
import ClubDetail from '@/components/club/ClubDetail';

interface ClubDetailPageProps {
  params: { id: string };
}

export default function ClubDetailPage({ params }: ClubDetailPageProps) {
  return (

      <MainLayout>
        <ClubDetail clubId={params.id} />
      </MainLayout>
 
  );
}