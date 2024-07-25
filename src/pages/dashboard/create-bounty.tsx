import { CreateListing } from '@/features/listing-builder';
import { Default } from '@/layouts/Default';

function CreateBounty() {
  return (
    <Default>
      <CreateListing type="bounty" />
    </Default>
  );
}

export default CreateBounty;
