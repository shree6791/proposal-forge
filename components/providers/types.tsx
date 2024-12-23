export type Database = {
    public: {
      Tables: {
        profiles: {
          Row: {
            id: string;
            username: string | null;
            created_at: string | null;
          };
          Insert: {
            id: string;
            username?: string | null;
            created_at?: string | null;
          };
          Update: {
            id?: string;
            username?: string | null;
            created_at?: string | null;
          };
        };
      };
      Views: {};
      Functions: {};
      Enums: {};
    };
  };
  