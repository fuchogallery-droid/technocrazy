"use client";
import { Star } from "lucide-react";

export function StarRatingDisplay({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          fill={n <= rating ? "#fbbf24" : "none"}
          color={n <= rating ? "#fbbf24" : "#4b5563"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function StarRatingInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`Calificar con ${n} estrella${n > 1 ? "s" : ""}`}
          className="p-0.5"
        >
          <Star
            size={26}
            fill={n <= value ? "#fbbf24" : "none"}
            color={n <= value ? "#fbbf24" : "#6b7280"}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  );
}
