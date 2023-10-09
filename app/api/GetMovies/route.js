import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    );
    const resp = await data.json();

    return NextResponse.json(resp);
  } catch (err) {
    console.log(err);
  }
}
