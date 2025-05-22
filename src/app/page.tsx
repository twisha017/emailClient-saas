'use client'
import { Button } from "@/components/ui/button";
import {getAurinkoAuthUrl} from '@/lib/aurinko'

export default async function Home() {

  return (
    <Button onClick={async()=>{
      const authUrl = await getAurinkoAuthUrl('Google');
      window.location.href = authUrl
    }}>Link test</Button>
  );
}
