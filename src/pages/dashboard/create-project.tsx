import { CreateListing } from '@/features/listing-builder';
import { Default } from '@/layouts/Default';

function CreateProject() {
  return (
    <Default>
      <CreateListing type="project" />
    </Default>
  );
}

export default CreateProject;
