'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink() {
    const router = useRouter();
    const a = useSearchParams();
    const b = usePathname();
    console.log(a)
    console.log(b, "pathName")
    return (
        <button onClick={() => router.push('/')}></button>
    )
}