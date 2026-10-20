import Community from './community';
import { getChatGPTUser } from './chatgpt-auth';
export const dynamic = 'force-dynamic';
export default async function Home(){ const user = await getChatGPTUser(); return <Community user={user?{name:user.fullName||user.email.split('@')[0],id:user.userId}:null}/>; }