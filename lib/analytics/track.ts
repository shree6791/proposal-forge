type EventName = 
  | 'page_view'
  | 'button_click'
  | 'form_submit'
  | 'proposal_generate'
  | 'proposal_download';

interface AnalyticsEvent {
  name: EventName;
  properties?: Record<string, any>;
  timestamp?: number;
}

class Analytics {
  private queue: AnalyticsEvent[] = [];
  private isInitialized = false;

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Process queued events
    while (this.queue.length > 0) {
      const event = this.queue.shift();
      if (event) this.trackEvent(event);
    }
  }

  private trackEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) {
      this.queue.push(event);
      return;
    }

    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      console.log('Track:', event.name, {
        ...event.properties,
        timestamp: event.timestamp || Date.now()
      });
    }
  }

  track(name: EventName, properties?: Record<string, any>) {
    this.trackEvent({ name, properties, timestamp: Date.now() });
  }
}

export const analytics = new Analytics();