<?php

namespace App\Filament\Resources\ProductResource\Pages;

use App\Filament\Resources\ProductResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Actions\Action;
use League\Csv\Reader;
use Filament\Notifications\Notification;

class ListProducts extends ListRecords
{
    protected static string $resource = ProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('import')
                ->label('Import CSV')
                ->icon('heroicon-o-arrow-up-tray')
                ->color('gray')
                ->action(function (array $data): void {
                    $file = $data['csv'];
                    
                    $csv = Reader::createFromPath($file->getPathname());
                    $csv->setHeaderOffset(0);
                    
                    $records = $csv->getRecords();
                    
                    foreach ($records as $record) {
                        static::$resource::getModel()::create([
                            'product_name' => $record['product_name'],
                            'product_image' => $record['product_image'],
                            'is_active' => true, // Set default value
                        ]);
                    }
                    
                    Notification::make()
                        ->title('Products imported successfully')
                        ->success()
                        ->send();
                })
                ->form([
                    \Filament\Forms\Components\FileUpload::make('csv')
                        ->label('CSV File')
                        ->acceptedFileTypes(['text/csv'])
                        ->required()
                ])
                ->modalHeading('Import Products CSV')
                ->modalDescription('Upload a CSV file containing product data. The CSV should have "product_name" and "product_image" columns.'),

            Actions\CreateAction::make(),
        ];
    }
}