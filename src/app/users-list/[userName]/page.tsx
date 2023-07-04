"use client";
import { withMaxWidthHOC } from "@/providers/withMaxWidthHOC";
import { useGetUsers } from "@/hooks/users-list/useGetUsers";
import {
  FixedTopBackButton,
  CompanyDetails,
  FullPageLoader,
  EditUserForm,
  Banner,
  UserPreviewDetails,
  ProfileDisplay,
} from "@/components/module";

interface PageProps {
  /**
   * inherited servserside params props
   */
  params: {
    /**
     * read from url path /users-list/userName
     */
    userName: string;
  };
}

function Page({ params }: PageProps) {
  const { userName } = params;
  const { data, isLoading } = useGetUsers();
  const user = data?.find((user) => user.username === userName);

  if (isLoading) {
    return <FullPageLoader />;
  }

  if (!user?.id) {
    return <div>User no found</div>;
  }

  return (
    <div id={`user-page`} className="relative flex flex-col items-center">
      <FixedTopBackButton />
      <ProfileDisplay
        username={user.username}
        name={user.name}
        companyName={user.company.name}
        id={user.id}
      />
      <EditUserForm {...user} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-3 w-full">
        <UserPreviewDetails {...user} />
        <CompanyDetails
          name={user.company.name}
          catchPhrase={user.company.catchPhrase}
          bs={user.company.bs}
        />
      </div>
    </div>
  );
}

export default withMaxWidthHOC(Page, Banner);
