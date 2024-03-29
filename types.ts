export type Library = {
  downloads: {
    artifact: {
      path: string;
      sha1: string;
      size: number;
      url: string;
    };
  };
  name: string;
};
export type Asset = {
  hash: string;
  size: number;
};
export type Version = {
  id: ReleaseString | SnapshotString;
  type: "release" | "snapshot";
  url: string;
  time: string;
  releaseTime: string;
};

export type VersionManifest = {
  latest: {
    snapshot: ReleaseString;
    release: SnapshotString;
  };
  versions: Version[];
};
type ReleaseString = `${number}.${number}`;
type SnapshotString = `${number}w${number}${string}`;

export type VersionData = {
  assetIndex: AssetIndexData;
  assets: string;
  downloads: {
    client: {
      sha1: string;
      size: number;
      url: string;
    };
  };
  id: ReleaseString | SnapshotString;
  javaVersion: {
    component: string;
    majorVersion: number;
  };
  libraries: Library[];
  mainClass: string;
};

export type AssetIndexData = {
  id: string;
  sha1: string;
  size: number;
  totalSize: number;
  url: string;
};

export type AssetIndex = {
  objects: { [asset: string]: Asset };
};
