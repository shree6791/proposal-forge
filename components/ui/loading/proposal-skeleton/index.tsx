import { LoadingProgress } from './loading-progress';
import { LoadingHeader } from './loading-header';

export function ProposalSkeleton() {
    return (
        <div className="space-y-12">
            <LoadingHeader />
            <LoadingProgress />
        </div>
    );
}