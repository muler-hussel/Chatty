import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface MemberIdPage {
  params: {
    memberId: string;
    serverId: string;
  }
}

const MemberIdPage = async ({
  params
}: MemberIdPage) => {
  const profile = await currentProfile();

  if (!profile) {
    return auth().redirectToSignIn();
  }
  
  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }
  
  return (
    <div>
      s
    </div>
  );
}
 
export default MemberIdPage;