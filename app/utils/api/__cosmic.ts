import { createBucketClient } from "@cosmicjs/sdk";

export const cosmic = createBucketClient({
    bucketSlug: process.env.BUCKET_SLUG!,
    readKey: process.env.BUCKET_READ_KEY!,
    writeKey: process.env.BUCKET_WRITE_KEY!,
});
