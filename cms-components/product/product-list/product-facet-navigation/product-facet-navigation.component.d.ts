import { HttpUrlEncodingCodec } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Facet, ProductSearchPage, ProductSearchService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
export declare class ProductFacetNavigationComponent implements OnInit {
    private modalService;
    private activatedRoute;
    private productSearchService;
    iconTypes: typeof ICON_TYPE;
    activeFacetValueCode: string;
    searchResult: ProductSearchPage;
    minPerFacet: number;
    showAllPerFacetMap: Map<String, boolean>;
    queryCodec: HttpUrlEncodingCodec;
    private collapsedFacets;
    searchResult$: Observable<ProductSearchPage>;
    updateParams$: Observable<Params>;
    readonly visibleFacets: Facet[];
    constructor(modalService: NgbModal, activatedRoute: ActivatedRoute, productSearchService: ProductSearchService);
    ngOnInit(): void;
    openFilterModal(content: any): void;
    toggleValue(query: string): void;
    showLess(facetName: String): void;
    showMore(facetName: String): void;
    private updateShowAllPerFacetMap;
    isFacetCollapsed(facetName: string): boolean;
    toggleFacet(facetName: string): void;
    getVisibleFacetValues(facet: any): any;
}
