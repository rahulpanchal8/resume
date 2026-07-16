interface ChallengesSolutionsItemProps {
  number: string;
  challenge: string;
  solution: string;
}

export function ChallengesSolutionsItem({
  number,
  challenge,
  solution,
}: ChallengesSolutionsItemProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold text-foreground leading-relaxed">
        <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">
          Challenge {number}:
        </span>{" "}
        {challenge}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
          Solution:
        </span>{" "}
        {solution}
      </p>
    </div>
  );
}
