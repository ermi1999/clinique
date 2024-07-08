"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Piece from "./imageFromPieces";
import {
  LargeItalicText,
  LargeTextContainer,
  SmallHeadingContainer,
} from "./textContainers";

export default function Services() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="flex flex-col w-full px-4 md:px-10">
      <SmallHeadingContainer>OUR SERVICES</SmallHeadingContainer>
      <LargeTextContainer>
        <span className="w-full self-start md:self-end md:justify-end flex flex-col md:flex-row -space-y-2 sm:-space-y-4 md:space-x-3">
          <span className="self-start">
            A <LargeItalicText>boutique</LargeItalicText>
          </span>{" "}
          <span className="self-end">experience</span>
        </span>
        <span className="flex flex-col md:flex-row -space-y-2 sm:-space-y-4 md:self-start md:space-y-0 md:space-x-3">
          <span className="self-start">Made-to-measure </span>
          <span className="self-center text-start w-60 sm:w-72 md:w-auto">
            results
          </span>
        </span>
      </LargeTextContainer>
      <span className="hidden xl:flex text-base self-end font-medium -my-2 xl:-my-5">
        HOVER TO DISCOVER
      </span>
      {isDesktop ? (
        <div className="space-y-1 my-28 text-primary-foreground">
          <Piece
            imageUrl="/resources/desktop_pieces/piece1.jpg"
            pieceNumber="01"
            heading="Primary Rhinoplasty"
            paragraph1="Changes the shape of the nose to achieve more balance"
            paragraph2="and symmetry of the facial features"
            align="start"
            href="/"
          />
          <Piece
            imageUrl="/resources/desktop_pieces/piece2.jpg"
            pieceNumber="02"
            heading="Revision Rhinoplasty"
            paragraph1="Requires operating on a nose that"
            paragraph2="has previously been altered surgically"
            align="start"
            href="/"
          />
          <Piece
            imageUrl="/resources/desktop_pieces/piece3.jpg"
            pieceNumber="03"
            heading="Ethnic Rhinoplasty"
            paragraph1="Catering to a wide range of ethnicities from Asian"
            paragraph2="to middle Eastern, to African and Afro-American and Hispanic"
            align="end"
            href="/"
          />
          <Piece
            imageUrl="/resources/desktop_pieces/piece4.jpg"
            pieceNumber="04"
            heading="Liquid Rhinoplasty"
            paragraph1="Non-surgical. Designed to scuipt a more"
            paragraph2="aesthetic nose that perfectly suits the face"
            align="end"
            href="/"
          />
          <Piece
            imageUrl="/resources/desktop_pieces/piece5.jpg"
            pieceNumber="05"
            heading="Adjunct Procedures"
            paragraph1="Offered in conjunction with"
            paragraph2="Rhinoplasty to further define the face"
            align="start"
            href="/"
          />
        </div>
      ) : (
        <div className="space-y-1 my-28 text-primary-foreground">
          <Piece
            imageUrl="/resources/mobile_pieces/mobile_piece1.webp"
            pieceNumber="01"
            heading="Primary Rhinoplasty"
            paragraph1="Changes the shape of the nose to achieve more balance and symmetry of the facial features"
            align="start"
            href="/"
          />
          <Piece
            imageUrl="/resources/mobile_pieces/mobile_piece2.webp"
            pieceNumber="02"
            heading="Revision Rhinoplasty"
            paragraph1="Requires operating on a nose that has previously been altered surgically"
            align="start"
            href="/"
          />
          <Piece
            imageUrl="/resources/mobile_pieces/mobile_piece3.webp"
            pieceNumber="03"
            heading="Ethnic Rhinoplasty"
            paragraph1="Catering to a wide range of ethnicities from Asian to middle Eastern, to African and Afro-American and Hispanic"
            align="end"
            href="/"
          />
          <Piece
            imageUrl="/resources/mobile_pieces/mobile_piece4.webp"
            pieceNumber="04"
            heading="Liquid Rhinoplasty"
            paragraph1="Non-surgical. Designed to scuipt a more aesthetic nose that perfectly suits the face"
            align="end"
            href="/"
          />
          <Piece
            imageUrl="/resources/mobile_pieces/mobile_piece5.webp"
            pieceNumber="05"
            heading="Adjunct Procedures"
            paragraph1="Offered in conjunction with Rhinoplasty to further define the face"
            align="start"
            href="/"
          />
        </div>
      )}
    </div>
  );
}
