import { cosmic } from "./__cosmic";

export async function getProjects() {
    try {
        const data = await Promise.resolve(
            cosmic.objects.find({ "type": "projects" })
                .props('slug, title, metadata')
        );
        return Promise.resolve(data.objects);
    } catch (error) {
        console.log('Oof', error);
    }
    return Promise.resolve(undefined);
}