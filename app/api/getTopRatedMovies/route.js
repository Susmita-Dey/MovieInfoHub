import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
    try {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&iso_3166_1=IN&iso_3166_1=US`
        );
        const resp = await data.json();

        return NextResponse.json(resp);
    } catch (err) {
        console.log(err);
    }
}
