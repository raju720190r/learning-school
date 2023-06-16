// upload image in img bb
export const uploadImage = async (image) => {
    const formData = new FormData(); //packet for sending image
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KET}`;
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json();
    return data;
}