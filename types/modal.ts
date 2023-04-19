export type TUser = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    nationCode: number
}
export type TGem = {
    createdAt: string;
    id: number;
    url: string;
    caption: string;
    likeCount: number;
    commentCount: number;
    sourceName: string;
    sourceType: string;
    extra: any;
    status: string;
    updatedAt: string;
    tags: any;
    user: TUser
}
export type TApiResponse<T> = {
    data: T | any;
    meta: {
        pagination: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total: number;
            limit?: number;
            offset?: number;
        }
    }
}

export type TPageData = {
    contentType: string;
    description: string;
    favicons: any;
    images: any;
    mediaType: string;
    siteName: string;
    title: string;
    url: string;
    videos: any;
}

