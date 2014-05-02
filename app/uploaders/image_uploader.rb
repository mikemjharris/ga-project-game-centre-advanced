class ImageUploader < CarrierWave::Uploader::Base

  include CarrierWave::RMagick
  include CarrierWave::MimeTypes

  storage :file

  process :set_content_type

  

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url
    ActionController::Base.helpers.asset_path("fallbacks/placeholder.png")
  end

  version :thumb do
    process :resize_to_fit => [100, 100]
  end
end
